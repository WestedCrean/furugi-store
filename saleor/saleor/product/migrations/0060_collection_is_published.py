# Generated by Django 2.0.3 on 2018-04-21 00:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("product", "0059_generate_variant_name_from_attrs")]

    operations = [
        migrations.AddField(
            model_name="collection",
            name="is_published",
            field=models.BooleanField(default=False),
        )
    ]
