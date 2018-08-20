# hexo-plugin-permalink-pathed-title

## What do `permalink-pathed-title` do

Suppose you have a hexo site, including several posts in directory `source/_posts`. The posts' file structure is like:

```
- source
  |- _posts
     |- china
     |  |- beijing
     |  |  |- food.md
     |  |  |- entertainment.md
     |  |  |- tourist-sites.md
     |  |- shanghai
     |     |- food.md
     |     |- entertainment.md
     |     |- tourist-sites.md
     |- japan
        |- tokyo
        |- food.md
        |- entertainment.md
        |- tourist-sites.md
```

In your site config (`/_config.yml`), suppose you are using:

```yml
permalink: :title/
```

Then the permalink of post `china/beijing/food.md` will be `xxx.com/china-beijing-food` . This is because post' title is its slug.

If you enable this plugin, then its permalink will be `xxx.com/china/beijing/food/`. You can also add `prefix` or `postfix` into it. For example: `xxx.com/post/china/beijing/food` , `xxx.com/post/china/beijing/food/content`, etc..

## How to use

### Installation

In your hexo project, install `hexo-plugin-permalink-pathed-title`


```bash
npm install --save hexo-plugin-permalink-pathed-title
```

Then serve the site

```bash
hexo server
```

### Usage 

In your hexo site config (`/_config.yml`), **Make Sure `permalink_pathed_title.us` is set to `true` .** For example:

```yml
permalink_pathed_title:
  use: true,
  prefix: "post", # optional
  postfix: "" # optional
```

Then, **Make Sure `permalink config` is set to `:id/` **

```yml
permalink: :id/
```

Then, permalinks with pathed title will be used to anchor posts.