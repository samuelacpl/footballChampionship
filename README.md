# footballChampionship

This is an Angular Web Application that allows users to consult the 2018-2019 A League Championship board.

By accessing the homepage -that displays the daily stats of matches starting from the last day- and clicking on the single match users can access the detail page of that specific match and see some statistics -free version-.

Using the arrows, users can move from a day to another.

By clicking on teams, users can access the teams detail page that displays features, performances and members of the selected team.

This project includes just three components ("tabellone", "match" and "squad"), two services ("match-service" and "match-list-service").

It uses just two http requests: one to display the Championship day and one to display teams' infos.

---------------------------------------------------------------------------------------------------

In order to get infos about the matches, this project uses the free APIs from https://www.football-data.org and also the documentation guide of how to use them on https://wwww.football-data.org/documentation/quickstart .

---------------------------------------------------------------------------------------------------

Building suggestions:
This project is easily buildable.
First must be downloaded and opened in Visual Studio Code, then compiled through the terminal. After this, you can open it by clicking on the link suggested by the terminal.

(Works both on macOS and Windows)

If there are some troubles compiling, try to type "--port" right after the "ng serve" command.


