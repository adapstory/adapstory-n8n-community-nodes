# Adapstory Customizations (Fork of n8n-nodes-starter)

## Upstream
- Source: https://github.com/n8n-io/n8n-nodes-starter
- Remote: `upstream` (`git remote -v` to verify)

## What we added
| File | Purpose |
|------|---------|
| `Dockerfile` | Extends `n8nio/n8n:2.8.3`; installs this package as custom extension |
| `Jenkinsfile` | Jenkins CI via `adapstoryPipeline(type:'docker')` — builds + pushes to Harbor |
| `ADAPSTORY_CUSTOMIZATIONS.md` | This file — tracks all divergences from upstream |

## Upstream sync procedure
```bash
git fetch upstream
git merge upstream/master
# resolve conflicts — keep Adapstory files (Dockerfile, Jenkinsfile, this doc)
git push origin main
cd .. && git add adapstory-n8n-community-nodes && git commit -m "chore: sync upstream"
```

## Custom nodes (add here as you build them)
- _(none yet — use upstream's Example node as template)_
