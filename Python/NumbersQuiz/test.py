from labs.Python.NumbersQuiz.main import trivia_fetch
import time

# Test 1
def test_trivia_42():
  assert len(trivia_fetch(5)["results"]) == 5

# Test 2
def test_trivia_1000():
  time.sleep(5)
  assert trivia_fetch(5)["response_code"] == 0