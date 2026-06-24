export default function handler(req, res) {
  const key = process.env.CLAUDE_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'CLAUDE_API_KEY ยังไม่ได้ตั้งค่า' });
  }
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(`window.__CLAUDE_KEY = ${JSON.stringify(key)};`);
}
