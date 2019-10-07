from django.db import models 
from django.forms import ModelForm 
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from datetime import date 
from django import forms 
from django.contrib.auth.models import User
from django.db import models 
from django.forms import ModelForm 
from django import forms 
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class Store(models.Model): 
    name = models.CharField(max_length=225)
    address = models.CharField(max_length=225)
    aisle_id = models.ManyToManyField('Aisle', related_name='store_aisles', blank=True)

    def __str__(self): 
        return self.name

class Aisle(models.Model): 
    number = models.IntegerField()
    category_id = models.ManyToManyField('Category', related_name="categories", blank=True)
    
    def __str__(self):
        return self.number

class Category(models.Model): 
    name = models.CharField(max_length=255)
    product_id = models.ManyToManyField('Product', related_name="products", blank=True)
    
    def __str__(self): 
        return self.name 


class Product(models.Model):
    name = models.CharField(max_length=225)
    price = models.FloatField()
    description = models.TextField(null=False)  
    ingredients = models.TextField(null=False)
    # needs to have type to help categorize? 
    def __str__(self): 
        return self.name

class ShoppingList(models.Model): 
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Product, related_name="shopping_list_products", blank=True) 
    budget = models.FloatField(null=False) 

    def __str__(self): 
        return self.user



@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)