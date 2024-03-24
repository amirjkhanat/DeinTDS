# Generated by Django 5.0.3 on 2024-03-24 18:54

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("traffic_distribution_system", "0002_alter_domain_campaign"),
    ]

    operations = [
        migrations.AddField(
            model_name="domain",
            name="status",
            field=models.CharField(
                choices=[
                    ("connected", "Connected"),
                    ("not connected", "Not Connected"),
                ],
                default="not connected",
                max_length=13,
            ),
        ),
    ]