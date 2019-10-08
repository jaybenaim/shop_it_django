from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        
        user.save()

        return user

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        feilds = '__all__'

class StoreSerializer(serializers.ModelSerializer): 

    class Meta: 
        model = Store 
        fields = '__all__'

    def create(self, validated_data):
        return Store.objects.create(**validated_data) 

    def update(self, store, validated_data): 
        store.name = validated_data.get("name", store.name)
        store.address = validated_data.get("address", store.address) 
        store.aisles.set(validated_data.get("aisles", store.aisles))

        store.save() 

        return store 


class AisleSerializer(serializers.ModelSerializer): 

    class Meta: 
        model = Aisle 
        fields = '__all__' 

    def create(self, validated_data): 
        return Aisle.objects.create(**validated_data) 

    def update(self, aisle, validated_data): 
        aisle.number = validated_data.get("number", aisle.number) 
        aisle.categories.set(validated_data.get("categories", aisle.categories))

        aisle.save() 

        return aisle 

class CategorySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Category 
        fields = '__all__' 

    def create(self, validated_data): 
        return Category.objects.create(**validated_data) 

    def update(self, category, validated_data): 
        category.name = validated_data.get("name", category.name) 
        category.products.set(validated_data.get("products", category.products))
        
        category.save() 

        return category

class ProductSerializer(serializers.ModelSerializer):

    class Meta: 
        model = Product 
        fields = '__all__'

    def create(self, validated_data): 
        return Product.objects.create(**validated_data) 

    def update(self, product, validated_data): 
        product.name = validated_data("name", product.name) 
        product.price = validated_data("price", product.price)
        product.description = validated_data("description", product.description)
        product.ingredients = validated_data("ingredients", product.ingredients)
    
        product.save()

        return product 

class ShoppingListSerializer(serializers.ModelSerializer): 

    class Meta: 
        model = ShoppingList 
        fields = '__all__' 

    def create(self, validated_data): 
        return ShoppingList.objects.create(**validated_data) 

    def update(self, shopping_list, validated_data): 
        shopping_list.user = validated_data("user", shopping_list.user) 
        shopping_list.budget = validated_data("budget", shopping_list.budget) 
        shopping_list.product.set(validated_data.get("product", shopping_list.product))

        shopping_list.save()

        return shopping_list