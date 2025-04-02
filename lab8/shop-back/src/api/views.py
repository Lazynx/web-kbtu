from django.http import JsonResponse
from .models import Product, Category

# Заглушки для продуктов и категорий
DEFAULT_PRODUCTS = [
    {"id": 1, "name": "Default Product", "category_id": 1, "price": 1000},
    {"id": 2, "name": "Another Default Product", "category_id": 1, "price": 1500},
]

DEFAULT_CATEGORIES = [
    {"id": 1, "name": "Default Category"},
    {"id": 2, "name": "Another Category"},
]

def product_list(request):
    try:
        products = list(Product.objects.values())
        if not products:  # Если пусто, вернуть заглушки
            products = DEFAULT_PRODUCTS
        return JsonResponse(data=products, status=200, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def categories_list(request):
    try:
        categories = list(Category.objects.values())
        if not categories:
            categories = DEFAULT_CATEGORIES
        return JsonResponse(data=categories, status=200, safe=False)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def product(request, product_id):
    try:
        product = Product.objects.filter(id=product_id).values().first()
        if not product:
            return JsonResponse(DEFAULT_PRODUCTS[0], status=200)  # Вернуть заглушку
        return JsonResponse(product, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def category(request, category_id):
    try:
        category = Category.objects.filter(id=category_id).values().first()
        if not category:
            return JsonResponse(DEFAULT_CATEGORIES[0], status=200)  # Вернуть заглушку
        return JsonResponse(category, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)

def find_product_by_category_id(request, category_id):
    try:
        products = list(Product.objects.filter(category_id=category_id).values())
        if not products:
            products = [p for p in DEFAULT_PRODUCTS if p["category_id"] == category_id]  # Вернуть заглушку по категории
        return JsonResponse(products, safe=False, status=200)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
