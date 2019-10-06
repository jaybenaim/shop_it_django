from rest_framework.authtoken import views as rest_framework_views
from .views import CustomObtainAuthToken as CustomTokenView
from django.contrib import admin
from rest_framework import routers, serializers, viewsets
from django.conf.urls import url

from django.urls import path, include 

from .views import *

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'stores', StoreViewSet)
router.register(r'aisles', AisleViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)
router.register(r'shopping_list', ShoppingListViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    url('api-token-auth/', rest_framework_views.obtain_auth_token),
    url(r'^authenticate/', CustomTokenView.as_view()),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^', FrontendAppView.as_view()),
]
