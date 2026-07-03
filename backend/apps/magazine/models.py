from django.db import models
class Article(models.Model):
    title = models.CharField(max_length=200, verbose_name="عنوان مقاله")
    content = models.TextField(verbose_name="محتوای مقاله")
#     image = models.ImageField(upload_to="magazine/", blank=True, null=True, verbose_name="تصویر مقاله")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
class Meta:
        verbose_name = "مقاله مجله"
        verbose_name_plural = "مقالات مجله"
def str(self):
        return self.title