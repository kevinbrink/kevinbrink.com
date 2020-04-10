# README

This is the readme for my site, http://www.kevinbrink.com. As I don't expect any
other people to be contributing to this repository, I don't see much use in
waxing too eloquent here.

However, if anyone has some suggestions for how to better it, I'm all ears; feel
free to contact me at Kevin@KevinBrink.com.

## Running

```
docker-compose up -d
```

## Migrating

```
docker exec -it $(docker ps -q --filter name="_web_") rake db:migrate
```

#### Version 2.0
