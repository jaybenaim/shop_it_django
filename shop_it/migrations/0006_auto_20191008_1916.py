# Generated by Django 2.2.4 on 2019-10-08 19:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop_it', '0005_auto_20191008_1912'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shoppinglist',
            old_name='products',
            new_name='product',
        ),
    ]
