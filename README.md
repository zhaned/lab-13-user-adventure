# EDIT-THIS-README

1. HOMEPAGE
- Make a form for user data
    - Submit:
        - Store user data in local storage
        - Redirect user to map/list

2. MAP/LIST
- Make ul to inject quests into
    - If all quests are completed, redirect to results page
    - If user has <= 0 hp, redirect them to the results page
- Grab quest data
- loop
- Generate title for each quest
- If quest is complete, cross it out
- If quest is not, have it be a link to the correct quest

3. Quest
- Make a header, image, paragraph, and a list of radio inputs
- Grab id of the quest from the URL
- Use id to _findById_ the quest in our quest data
- Use that quest data to populate the elements in html
- On submit
	- update user's new stat
	- put new stats in local storage
	- return to map/list

4. Results
- Display some customized ending determined by the user's stats
- Button to retry (clear local storage and redirect to home)