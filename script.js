const LOG_URL = 'https://script.google.com/macros/s/AKfycbzMlfh1CSdFooOu4AYpP6L4zaFzJwonawgyX7QAKs2P0HNdNygrQSP6N37to2C4iIyk/exec';

document.addEventListener('DOMContentLoaded', function () {
  const participantInput = document.getElementById('participant_id');
  const queryInput = document.getElementById('user_query');
  const sendButton = document.getElementById('send_button');
  const answerBox = document.getElementById('llm_answer_box');

  sendButton.disabled = false;

  sendButton.addEventListener('click', async function () {
    const participantId = participantInput.value.trim();
    const userQuery = queryInput.value.trim();

    if (!participantId || !userQuery) {
      alert('Please fill in Participant ID and your question.');
      return;
    }

    const startTimestamp = new Date();
    answerBox.textContent = 'Thinking...';

    // כאן בעתיד ייכנס הקריאה האמיתית ל‑LLM דרך Apps Script או API אחר.
    await new Promise(resolve => setTimeout(resolve, 1000));

    const endTimestamp = new Date();
    const responseTimeMs = endTimestamp - startTimestamp;

    const llmAnswer = `This is a placeholder answer.\n\nResponse time: ${responseTimeMs} ms.`;
    answerBox.textContent = llmAnswer;

    const payload = {
      participant_id: participantId,
      expertise_group: '',     // תמלאי אחר כך אם תרצי
      task_id: '',             // תמלאי לפי המשימה
      model_id: '',            // A / B / C וכו'
      user_query: userQuery,
      llm_answer: llmAnswer,
      start_timestamp: startTimestamp.toISOString(),
      end_timestamp: endTimestamp.toISOString(),
      response_time_ms: responseTimeMs
    };

    try {
      const res = await fetch(LOG_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('Logged to sheet', payload);
    } catch (err) {
      console.error('Logging failed', err);
    }
  });
});
