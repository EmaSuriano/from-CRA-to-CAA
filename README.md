# From create-react-app to create-any-app

Talk given at [Byteconf React 2020](https://www.bytesized.xyz/from-create-react-app-to-create-any-app/).

## Summary

Same company, lots of teams, different technologies, developers battling outdated dependencies and copying scripts and configuration files all over multiple projects? Does this sound familiar to you?

At Omio, we solved this problem by building a development framework that helps all teams bootstrap and maintaining their projects. It provides a CLI to wrap up all the application lifecycle actions: create, development, testing, release, etc. Allowing teams to worry only about shipping features instead of struggling with configurations.

I’m really excited about our solution and in this talk I’ll cover the process of developing this framework, explaining its architecture and main concepts, followed by a demo of a sample project showcasing some real use cases such as visual testing, Storybook for web, React Native, etc.

## Setup

```bash
# install deps
> yarn

# start local development
> yarn start


# build for release
> yarn build

# deploy to gh-pages
> yarn deploy
```

Feel free to use this repository as your example :)
