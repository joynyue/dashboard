## Dashboard

### Getting started

Runs the app in the development mode.<br />

```shell
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
The page is also deployed via GitHub pages

### Reasoning for the decisions made behind the tech stack and packages

I used React with hooks, it easy to develop by components.
I used ant-design for a simple dropdown menu.

### Compromises made due to time constraints

1. The dashboard is a basic HTML table, I would use the UI framework to make it look better.
2. The claims are sorted by the number of hours exceeding the SLA amount only, I would add more functions to make the dashboard able to sort by id, by updated/created date, by claimant's name in alphabetical order, etc.
3. I would convertthe time to a more readable format.
4. I would make a login function so the assessors can only access to their own data.
