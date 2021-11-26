from django.contrib import admin
from .models import Food
from .models import Message

class FoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'size', 'cost')
    list_filter = ('category',)
    search_fields = ('name',)

class MessageAdmin(admin.ModelAdmin):
    list_display = ('fullname', 'email', 'message')
    search_fields = ('email',)

admin.site.register(Food, FoodAdmin)
admin.site.register(Message, MessageAdmin)