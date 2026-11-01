# Hello Stores — OpenCode recreation pack

This pack contains the detailed implementation prompt, actual screenshots of the current Hello Stores website, its illustrations and fonts, and the original design stylesheet.

## Use it

1. Extract this folder into the project directory where you want OpenCode to build the website.
2. Open that directory in OpenCode.
3. Paste the complete contents of `Hello-Stores-OpenCode-Prompt.md`, or ask OpenCode to read that file and implement it in full.
4. Give the agent the two images in `reference/` for visual guidance. The hero image is best for opening-screen detail; the full-page image supplies the complete page flow.
5. Keep `public/` available to the agent. It contains the actual artwork, fonts, font licence and favicon, so there is no need to improvise replacements.

Suggested opening instruction:

> Read Hello-Stores-OpenCode-Prompt.md and inspect reference/Hello-Stores-Desktop-Hero.jpg, reference/Hello-Stores-Desktop-Full.jpg and reference/design-reference.css. Implement the website in this directory using the supplied public assets. Follow the full prompt, build real interactions, run the appropriate checks, and verify both desktop and mobile layouts.

## Included files

- `Hello-Stores-OpenCode-Prompt.md`: the complete build prompt and acceptance criteria.
- `reference/Hello-Stores-Desktop-Hero.jpg`: actual desktop opening-screen screenshot.
- `reference/Hello-Stores-Desktop-Full.jpg`: actual screenshot of the complete current page.
- `reference/design-reference.css`: original responsive design styles.
- `public/images/`: eight original optimised brand illustrations.
- `public/fonts/`: four local font files and their original licence.
- `public/favicon.svg`: existing brand favicon.

## Notes

The references are screenshots of the implemented design, not newly generated speculative mockups. The page is a brand and partnership website; customer ordering is described as part of the model, with no grocery checkout in this version. The first rollout is planned for Kochi.

The prompt uses a portable Next.js approach and permits the agent to preserve an already-established repository stack. A genuinely persistent enquiry form requires a database configured in the new environment. The pack contains no database contents, credentials, hosting tokens or private account details.

The original website is unchanged by this handoff.
