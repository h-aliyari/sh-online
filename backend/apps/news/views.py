from django.http import JsonResponse
from .services import fetch_mehr_news

def latest_news_api(request):
    try:
        data = fetch_mehr_news()
        return JsonResponse({"status": "success", "data": data}, safe=False)
    except Exception as e:
        return JsonResponse({"status": "error", "message": str(e)}, status=500)