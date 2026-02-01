from django.http import HttpResponse

user_interface = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMCvoice - Your Voice Matters</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            max-width: 550px;
            width: 100%;
            padding: 50px 40px;
            text-align: center;
            animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .logo {
            width: 90px;
            height: 90px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
            font-weight: 700;
            font-family: 'Poppins', sans-serif;
        }

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 36px;
            color: #1a202c;
            margin-bottom: 15px;
            font-weight: 700;
        }

        .tagline {
            color: #718096;
            font-size: 18px;
            margin-bottom: 30px;
            line-height: 1.6;
        }

        .description {
            color: #4a5568;
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 35px;
        }

        .features {
            display: grid;
            gap: 15px;
            margin-bottom: 35px;
            text-align: left;
        }

        .feature-item {
            background: #f7fafc;
            padding: 18px 20px;
            border-radius: 12px;
            border-left: 4px solid #667eea;
            font-size: 15px;
            color: #2d3748;
        }

        .feature-icon {
            margin-right: 10px;
            font-size: 18px;
        }

        .cta-button {
            display: inline-block;
            padding: 16px 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 12px;
            font-size: 17px;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            transition: all 0.3s ease;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }

        .footer-text {
            margin-top: 25px;
            color: #a0aec0;
            font-size: 13px;
        }

        @media (max-width: 600px) {
            .container {
                padding: 40px 30px;
            }

            h1 {
                font-size: 28px;
            }

            .logo {
                width: 75px;
                height: 75px;
                font-size: 35px;
            }

            .tagline {
                font-size: 16px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">BV</div>
        
        <h1>Welcome to BMCvoice</h1>
        
        <p class="tagline">Your direct line to campus leadership</p>
        
        <p class="description">
            BMCvoice empowers you to share your voice and make a difference. 
            Connect directly with the campus chief through our QR-enabled feedback system.
        </p>

        <div class="features">
            <div class="feature-item">
                <span class="feature-icon">💬</span>
                <strong>Share Complaints & Suggestions</strong>
            </div>
            <div class="feature-item">
                <span class="feature-icon">🤝</span>
                <strong>Request Meetings</strong>
            </div>
            <div class="feature-item">
                <span class="feature-icon">✨</span>
                <strong>Express Appreciation</strong>
            </div>
        </div>
        <p class="footer-text">Scan QR codes around campus to submit your feedback</p>
    </div>
</body>
</html>
"""

def home(request):
    return HttpResponse(user_interface)