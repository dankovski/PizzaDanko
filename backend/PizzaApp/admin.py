from django.contrib import admin
from .models import Food

#admin.site.register(Food)

# Register your models here.

class FoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'size', 'cost')
    list_filter = ('name', 'category', 'cost', 'size')
    search_fields = ('name', 'category')


admin.site.register(Food, FoodAdmin)