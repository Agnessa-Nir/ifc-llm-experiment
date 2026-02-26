// יופעל כשהעמוד נטען
document.addEventListener('DOMContentLoaded', function () {
  const participantInput = document.getElementById('participant_id');
  const queryInput = document.getElementById('user_query');
  const sendButton = document.getElementById('send_button');
  const answerBox = document.getElementById('llm_answer_box');

  // בינתיים נפעיל את הכפתור (עד שיהיה חיבור ל‑Apps Script)
  sendButton.disabled = false;

  sendButton.addEventListener('click', async function () {
    const participantId = participantInput.value.trim();
    const userQuery = queryInput.value.trim();

    if (!participantId || !userQuery) {
      alert('Please fill in Participant ID and your question.');
      return;
    }

    // סימון תחילת זמן
    const startTimestamp = new Date();
    answerBox.textContent = 'Thinking...';

    // כאן בעתיד נקרא ל‑LLM דרך Apps Script.
    // כרגע רק מדמים עיכוב של תשובה:
    await new Promise(resolve => setTimeout(resolve, 1000));

    const endTimestamp = new Date();
    const responseTimeMs = endTimestamp - startTimestamp;

    // תשובה מדומה במקום LLM אמיתי
    const fakeAnswer = `This is a placeholder answer.\n\nResponse time: ${responseTimeMs} ms.`;

    answerBox.textContent = fakeAnswer;

    console.log({
      participant_id: participantId,
      user_query: userQuery,
      start_timestamp: startTimestamp.toISOString(),
      end_timestamp: endTimestamp.toISOString(),
      response_time_ms: responseTimeMs
    });
  });
});
