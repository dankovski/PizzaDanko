# Generated by Django 3.2.8 on 2021-11-16 01:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PizzaApp', '0003_alter_food_cost'),
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fullname', models.CharField(max_length=40)),
                ('email', models.CharField(max_length=40)),
                ('message', models.CharField(max_length=500)),
            ],
        ),
    ]
