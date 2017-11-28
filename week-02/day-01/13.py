current_hours = 14  
current_minutes = 34
current_seconds = 42
full_day_sec = 24 * 60 * 60
current_overall_sec = 14 * 60 * 60 + 34 * 60 + 42

print(int(full_day_sec) - int(current_overall_sec))