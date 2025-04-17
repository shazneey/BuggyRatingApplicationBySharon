How to Run the Test

Clone the repo
git clone https://github.com/shazneey/BuggyRatingApplicationBySharon.git
cd BuggyRatingApplicationBySharon

Install dependencies
npm install
npx playwright install

Set up environment variables
Ensure environment variables are set correct in the env/.env.local with your login info:
BASE_URL=https://buggy.justtestit.org/
USERNAME=your_username
PASSWORD=your_password

Run the test in headed mode (browser opens)
npx playwright test tests/Buggy_User_Profile_Update.spec.ts --headed
