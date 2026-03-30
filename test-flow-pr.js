// app.js (ตัวอย่างโค้ดแย่ๆ เพื่อทดสอบ)
function calculate(a, b) {
  // 1. Hardcoded Secret (เสี่ยงมาก)
  const apiKey = "sk-1234567890abcdefghijklmnopqrstuvwxyz";

  // 2. ใช้ var (เก่าแล้ว)
  var total = a + b;

  // 3. จงใจทำให้เกิด Error
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return total;
}
