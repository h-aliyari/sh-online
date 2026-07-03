from django.urls import path
from .views import latest_news_api

urlpatterns = [
    path('latest/', latest_news_api, name='latest_news'),
]