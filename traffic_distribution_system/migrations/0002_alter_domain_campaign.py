# Generated by Django 5.0.3 on 2024-03-24 18:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("traffic_distribution_system", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="domain",
            name="campaign",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="domains",
                to="traffic_distribution_system.campaign",
            ),
        ),
    ]