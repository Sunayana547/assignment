import mysql.connector


def get_db_connection():
    try:
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='manikanta@2005', 
            database='contact_db'
        )
        return connection
    except Exception as e:
        print("Error connecting to database:", e)
        return None
