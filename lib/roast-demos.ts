export interface RoastEntry {
  keywords: string[]
  code: string
  roast: string
}

export const ROAST_SAMPLES: RoastEntry[] = [
  {
    keywords: ['for', 'users', 'var', 'data'],
    code: `function getUserData(id) {
  var data = []
  for (var i = 0; i < 1000; i++) {
    if (users[i].id == id) {
      data.push(users[i])
      break
    }
  }
  if (data.length > 0) {
    return data[0]
  } else {
    return null
  }
}`,
    roast: `🔥 THE ROAST
Looping through 1000 users to find ONE person is like searching a library by reading every single book until you find the one you want — then putting the result in a shopping cart just to take one item out. The \`== id\` without type safety is the cherry on top of this anxiety sundae.

💡 WHAT'S WRONG
- O(n) linear scan when you should be using a Map or .find() — this loop is doing the most for the least
- \`var\` in 2024 is a red flag; function-scoped variables in a loop will haunt your debugging sessions
- Pushing to an array just to grab index 0 is like hiring a moving company to hand you your keys
- \`== id\` instead of \`===\` — loose equality is a bug disguised as a feature
- The \`if (data.length > 0)...\` check is unnecessary ceremony when you can just return the value directly

✨ THE GLOW-UP
\`\`\`javascript
// Pre-build a Map once at startup — O(1) lookups forever
const userMap = new Map(users.map(user => [user.id, user]));

function getUserData(id) {
  return userMap.get(id) ?? null;
}
\`\`\``,
  },
  {
    keywords: ['password', 'auth', 'login', 'user'],
    code: `function checkPassword(user, pass) {
  if (user == "admin" && pass == "admin123") {
    return true
  }
  if (user == "test" && pass == "test") {
    return true  
  }
  return false
}`,
    roast: `🔥 THE ROAST
Congratulations, you've written the authentication system that every hacker's script kiddie tutorial dreams about. Hardcoding "admin/admin123" isn't a password — it's a welcome mat with a neon sign that says "please steal everything." This code belongs in a museum labeled "How Not To Security."

💡 WHAT'S WRONG
- Hardcoded credentials in source code = instant catastrophic security breach when code is committed to git
- Loose equality \`==\` instead of \`===\` means type coercion can produce surprising (bad) results
- No hashing — plain text password comparison means one database leak exposes all users
- A "test" account with password "test" in what appears to be production logic is genuinely alarming
- No rate limiting, no lockout, no logging — attackers can brute force this all day

✨ THE GLOW-UP
\`\`\`javascript
const bcrypt = require('bcrypt');

async function checkPassword(username, plainPassword) {
  // Fetch user from your actual database
  const user = await db.users.findOne({ username });
  if (!user) return false;

  // Compare against a securely hashed password
  return bcrypt.compare(plainPassword, user.passwordHash);
}

// When creating a user, hash the password:
// const hash = await bcrypt.hash(plainPassword, 12);
\`\`\``,
  },
  {
    keywords: ['async', 'await', 'fetch', 'then', 'catch'],
    code: `async function loadData() {
  try {
    const res = await fetch('/api/data')
    const json = await res.json()
    data = json
    renderUI()
    loading = false
  } catch(e) {
    console.log(e)
    loading = false
  }
}`,
    roast: `🔥 THE ROAST
The structure here is almost respectable — then you see that catch block just whispering a secret to the console and pretending everything is fine. Silently eating errors is how production fires start. Also, mutating global variables inside an async function is a time bomb wrapped in a \`try\`.

💡 WHAT'S WRONG
- \`console.log(e)\` in a catch block is a cry for help that nobody hears — errors need to surface to users or a monitoring system
- No check that \`res.ok\` is true — a 404 or 500 will happily \`res.json()\` an error payload and act like everything worked
- Mutating \`data\` and \`loading\` as implicit globals is a state management nightmare waiting to happen
- \`renderUI()\` is called on success but not reset on error — UI can get stuck in a broken half-state
- Setting \`loading = false\` in both branches is a code smell screaming for a \`finally\`

✨ THE GLOW-UP
\`\`\`javascript
async function loadData() {
  loading = true;
  try {
    const res = await fetch('/api/data');
    if (!res.ok) {
      throw new Error(\`HTTP \${res.status}: \${res.statusText}\`);
    }
    data = await res.json();
    renderUI();
  } catch (error) {
    console.error('Failed to load data:', error);
    showErrorState(error.message); // Tell the user something went wrong!
  } finally {
    loading = false; // Always runs — success or failure
  }
}
\`\`\``,
  },
]

export const DEFAULT_CODE = ROAST_SAMPLES[0].code

export function findRoast(code: string): RoastEntry {
  const lower = code.toLowerCase()
  for (const entry of ROAST_SAMPLES) {
    if (entry.keywords.filter((k) => lower.includes(k)).length >= 2) {
      return entry
    }
  }
  // Default to first sample's roast but with a generic opening
  return ROAST_SAMPLES[0]
}
