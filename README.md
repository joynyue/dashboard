## Dashboard

### Getting started

Runs the app in the development mode.<br />

```shell
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
The page is also deployed via GitHub pages https://joynyue.github.io/dashboard/

### Reasoning for the decisions made behind the tech stack and packages

I used React with hooks, it easy to develop by components.
I used ant-design for a simple dropdown menu.

### Compromises made due to time constraints

1. The dashboard is a basic HTML table, I would use the UI framework to make it look better.
2. The claims are sorted by the number of hours exceeding the SLA amount only, I would add more functions to make the dashboard able to sort by id, by updated/created date, by claimant's name in alphabetical order, etc.
3. The current time format is too lengthy, I would convert the time to a more readable format.
4. Currently any user can access all the claims, I would make a login functionality so the assessors can only access the claims assigned to them.
