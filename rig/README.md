# Holostaff deployment rig

This fork is a Tier-2 target of the Holostaff deployment test rig
(holostaff-agent `documents/prd-test-rig.md`, P3). The rig force-resets
`main` to a pinned baseline before every run, opens real Holostaff
deploy + embed PRs against it, merges them, builds the web app from the
merged source on top of the project's own self-host compose stack
(`docker/docker-compose.yml` + `rig/compose.override.yml`), and drives
simulated users at the running app.

Manual bring-up:

```sh
RIG_APP_PORT=4180 \
RIG_PUBLIC_ORIGIN=http://localhost:4180 \
docker compose -f docker/docker-compose.yml -f rig/compose.override.yml up -d --build
```

Seeding: fresh DB every run → the app boots in fresh-instance mode and
the rig's simulated user creates the first account through the
`/setup/signup` flow (email verification is disabled by stack default).
