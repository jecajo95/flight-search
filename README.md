# Live showcase

You can see a live version of this application here: [https://github-2ldush.stackblitz.io](https://github-2ldush.stackblitz.io).

The editor view of the live version can be accessed here: [https://stackblitz.com/edit/github-2ldush](https://stackblitz.com/edit/github-2ldush).

# Assignment

I've been given the following assignment by an experienced frontend developer in order to build a showcase for my skills.

## Assignment details

Write a flight search that matches the following specification:

- One should be able to add and delete cities
- One should be able to add and delete a connection between two cities
- One should be able to search for all flights that exist between two cities (including stopovers in other cities)

### Example 1

**Cities:** London, Rome, Berlin

**Connections:** London -> Rome, Rome -> Berlin

**Expected search results for London -> Berlin:** London -> Rome -> Berlin

### Example 2

**Cities:** London, Rome, Vienna, Berlin

**Connections:** London -> Rome, Rome -> Berlin, London -> Berlin, Berlin -> London, London -> Vienna

**Expected search results for London -> Berlin:** London -> Rome -> Berlin, London -> Berlin

**Expected search resutls for London -> Vienna:** London -> Vienna
