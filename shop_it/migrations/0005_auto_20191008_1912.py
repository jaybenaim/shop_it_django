# Generated by Django 2.2.4 on 2019-10-08 19:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop_it', '0004_remove_shoppinglist_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='shoppinglist',
            old_name='product',
            new_name='products',
        ),
    ]
