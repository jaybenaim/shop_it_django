# Generated by Django 2.2.4 on 2019-10-08 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop_it', '0002_shoppinglist_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoppinglist',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
    ]
