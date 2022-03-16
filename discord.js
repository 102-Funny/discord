from discord.ext import commands 
import discord
import json

bot = commands.Bot(command_prefix="!")

with open('items.json', "r", encoding = "utf8") as file:
    data = json.load(file)
    

@bot.event
async def on_ready():
    print("Bot in ready")
    
bot.run(data['token']) 
