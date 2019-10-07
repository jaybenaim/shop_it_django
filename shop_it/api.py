from .models import * 
from rest_framework import viewsets, permissions
from .serializers import * 
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        # user = User.objects.get(id=response.data['id'])
      
        return Response({'token': token.key, 'id': token.user_id , "username": token.user.username })
        
class StoreViewSet(viewsets.ModelViewSet): 
    queryset = Store.objects.all() 
    serializer_class = StoreSerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated] 

    def get_permissions(self): 
        if self.request.method == 'GET': 
            self.permission_classes = (permissions.AllowAny,) 
        return super(StoreViewSet, self).get_permissions() 
        if self.request.method == 'POST': 
            self.permission_classes = (permissions.AllowAny, ) 
        return super(StoreViewSet, self).get_permissions() 
        
class AisleViewSet(viewsets.ModelViewSet): 
    queryset = Aisle.objects.all() 
    serializer_class = AisleSerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated] 

    def get_permissions(self): 
        if self.request.method == 'GET': 
            self.permission_classes = (permissions.AllowAny,) 
        return super(AisleViewSet, self).get_permissions() 
        if self.request.method == 'POST': 
            self.permission_classes = (permissions.AllowAny, ) 
        return super(AisleViewSet, self).get_permissions() 

class CategoryViewSet(viewsets.ModelViewSet): 
    queryset = Category.objects.all() 
    serializer_class = CategorySerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated] 

    def get_permissions(self): 
        if self.request.method == 'GET': 
            self.permission_classes = (permissions.AllowAny,) 
        return super(CategoryViewSet, self).get_permissions() 
        if self.request.method == 'POST': 
            self.permission_classes = (permissions.AllowAny, ) 
        return super(CategoryViewSet, self).get_permissions() 

class ProductViewSet(viewsets.ModelViewSet): 
    queryset = Product.objects.all() 
    serializer_class = ProductSerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated] 

    def get_permissions(self): 
        if self.request.method == 'GET': 
            self.permission_classes = (permissions.AllowAny,) 
        return super(ProductViewSet, self).get_permissions() 
        if self.request.method == 'POST': 
            self.permission_classes = (permissions.AllowAny, ) 
        return super(ProductViewSet, self).get_permissions() 

class ShoppingListViewSet(viewsets.ModelViewSet): 
    queryset = ShoppingList.objects.all() 
    serializer_class = ShoppingListSerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated] 

    def get_permissions(self): 
        if self.request.method == 'GET': 
            self.permission_classes = (permissions.AllowAny,) 
        return super(ShoppingListViewSet, self).get_permissions() 
        if self.request.method == 'POST': 
            self.permission_classes = (permissions.AllowAny, ) 
        return super(ShoppingListViewSet, self).get_permissions() 


class UserViewSet(viewsets.ModelViewSet): 
    """ API endpoint that allows users to be viewed or edited """ 
    queryset = User.objects.filter()
    serializer_class = UserSerializer 
    permission_classes = [permissions.AllowAny, permissions.IsAuthenticated]

    def get_permissions(self):
        if self.request.method == 'POST':
            self.permission_classes = (permissions.AllowAny,)
        return super(UserViewSet, self).get_permissions()
