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

    def __str__(self):
        return self.name


class Message(models.Model):
    id = models.AutoField(primary_key=True)
    fullname = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    message = models.CharField(max_length=500)

    def __str__(self):
        return self.message
