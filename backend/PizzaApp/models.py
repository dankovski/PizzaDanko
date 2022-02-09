from django.db import models
from django.contrib.auth.models import User


class Food(models.Model):
    CATEGORIES = (
        (1, 'PIZZA'),
        (2, 'KEBAB'),
        (3, 'BURGERS'),
        (4, 'SALADS'),
        (5, 'DRINKS'),
    )
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    category = models.SmallIntegerField(choices=CATEGORIES)
    size = models.CharField(max_length=10)
    cost = models.DecimalField(decimal_places=2, max_digits=6)
    description = models.CharField(max_length=100)
    photo = models.ImageField(upload_to="media")



class Message(models.Model):
    id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    message = models.CharField(max_length=500)

    def __str__(self):
        return self.message


class OrderItem(models.Model):
    food_id = models.IntegerField()
    quantity = models.IntegerField(default=1, null=False)


class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.CharField(max_length=40)
    address_id = models.CharField(max_length=40)
    order_date = models.DateTimeField(auto_now_add=True)
    delivery_date = models.DateTimeField()
    total_cost = models.IntegerField()
    STATUS = (
        (1, 'PREPARING'),
        (2, 'DELIVERING'),
        (3, 'DELIVERED')
    )

