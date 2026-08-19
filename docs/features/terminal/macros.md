# Terminal Macros

A macro types into a terminal for you, and can wait for the terminal to say something before it carries on. That is the difference between a macro and a [snippet](./snippets): a snippet fires one command, a macro holds a short conversation.

Use one for anything with prompts in the middle. Logging into a device that asks questions, stepping through an installer, or running something that wants a confirmation before it continues.

## Creating a macro

Open the Macros panel from the sidebar and make a new one. Give it a name, then add steps. They run in order, top to bottom.

## Step types

### Send

Types text into the terminal. There is a switch for whether to press Enter afterwards, so you can either run a command or just fill in an answer at a prompt.

### Delay

Waits for a set time before moving on. Up to five minutes.

Use this when you know roughly how long something takes. When you can match on the output instead, wait is better.

### Wait

Pauses until the terminal prints something matching a pattern. This is what makes macros useful, because it reacts to what the machine actually said rather than guessing at timings.

By default the pattern is plain text, so typing `Password:` waits for exactly that to appear. There is a switch to treat it as a regular expression instead, for when you need something looser like `\$ $` to match a shell prompt at the end of a line.

If a regular expression is not valid, Termix matches it as plain text rather than stopping the macro.

Each wait has a timeout, from 100 milliseconds up to five minutes, and you choose what happens if nothing matches in time:

- Stop ends the macro
- Continue moves on to the next step anyway

### If

Checks whether the output so far matches a pattern, then runs one set of steps if it does and another if it does not. Useful when a machine might already be in the state you want. Patterns work the same as in a wait step: plain text by default, regular expression if you switch it on.

### Repeat

Runs a group of steps a set number of times, from 1 to 100.

## Running a macro

Open a terminal, then run the macro from the panel. Termix shows which step it is on as it goes, and you can stop it partway through.

Macros run against the terminal you have open, so anything you can type by hand, a macro can type for you.

## Keep secrets out of macros

A macro is stored as plain text, so do not put passwords in a send step.

For a password, use a saved [credential](/features/files-and-hosts/credentials) on the host so Termix fills it in during the connection, and let the macro handle the steps after that.

## Macros and snippets

Both save you typing, and they are good at different things.

|                           | Snippets    | Macros                     |
| ------------------------- | ----------- | -------------------------- |
| Runs                      | One command | A list of steps            |
| Reacts to output          | No          | Yes                        |
| Conditions and repeats    | No          | Yes                        |
| Run on many hosts at once | Yes         | No, one terminal at a time |

For one command across many servers, use a snippet or a [fleet](/features/fleets/overview). For a back and forth with one machine, use a macro.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
