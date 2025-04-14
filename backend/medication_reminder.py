import schedule
import time

def job():
    print("Time to take your medication!")

schedule.every().day.at("10:00").do(job)

while True:
    schedule.run_pending()
    time.sleep(1)
