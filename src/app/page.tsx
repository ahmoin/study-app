'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SavedQuiz } from '@/types/quiz'
import { quizTemplates, categories } from '@/data/quizTemplates';
import { checkAnswer } from '@/lib/utils';
import type { Question, QuestionType  } from "@/types/quiz"

export default function StudyApp() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    type: 'multiple-choice',
    options: ['', '', '', '']
  })
  const [quizMode, setQuizMode] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [quizName, setQuizName] = useState('')
  const [savedQuizzes, setSavedQuizzes] = useState<SavedQuiz[]>([])
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'browse' | 'create'>('browse');
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('savedQuizzes')
    if (saved) {
      setSavedQuizzes(JSON.parse(saved))
    }
  }, [])

  const addQuestion = () => {
    if (newQuestion.question && newQuestion.answer) {
      setQuestions([...questions, { ...newQuestion, id: Date.now() } as Question])
      setNewQuestion({ type: 'multiple-choice', options: ['', '', '', ''] })
    }
  }

  const startQuiz = () => {
    setQuizMode(true)
    setCurrentQuestionIndex(0)
    setUserAnswer('')
    setShowResult(false)
  }

  const handleAnswer = () => {
    setShowResult(true)
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setUserAnswer('')
      setShowResult(false)
    } else {
      setQuizMode(false)
    }
  }

  const saveQuiz = () => {
    if (!quizName || questions.length === 0) return

    const newQuiz: SavedQuiz = {
      id: Date.now().toString(),
      name: quizName,
      createdAt: Date.now(),
      questions
    }

    const updatedQuizzes = [...savedQuizzes, newQuiz]
    setSavedQuizzes(updatedQuizzes)
    localStorage.setItem('savedQuizzes', JSON.stringify(updatedQuizzes))
    setQuizName('')
  }

  const loadQuiz = (quizId: string) => {
    const quiz = savedQuizzes.find(q => q.id === quizId)
    if (quiz) {
      setQuestions(quiz.questions)
      setSelectedQuizId(quizId)
      setQuizMode(false)
    }
  }

  const deleteQuiz = (quizId: string) => {
    const updatedQuizzes = savedQuizzes.filter(q => q.id !== quizId)
    setSavedQuizzes(updatedQuizzes)
    localStorage.setItem('savedQuizzes', JSON.stringify(updatedQuizzes))
    if (selectedQuizId === quizId) {
      setSelectedQuizId(null)
      setQuestions([])
    }
  }

  const loadTemplate = (templateId: string) => {
    const template = quizTemplates.find(t => t.id === templateId);
    if (template) {
      setQuestions(template.questions.map((q, index) => ({
        ...q,
        id: Date.now() + index,
        constructedResponseConfig: q.type === 'constructed-response' ? {
          acceptableAnswers: q.acceptableAnswers || [q.acceptableAnswers[0]],
          ignoreAccents: false
        } : undefined
      })));
      setQuizName(template.name);
      setActiveTab('create');
    }
  };

  const updateQuestion = (updatedQuestion: Question) => {
    setQuestions(questions.map(q => 
      q.id === updatedQuestion.id ? updatedQuestion : q
    ));
    setEditingQuestion(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (showResult) {
        nextQuestion();
      } else if (userAnswer) {
        handleAnswer();
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-xl font-bold">Study App</h1>
            {!quizMode && (
              <div className="flex gap-4">
                <Button
                  variant={activeTab === 'browse' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('browse')}
                >
                  Browse Quizzes
                </Button>
                <Button
                  variant={activeTab === 'create' ? 'default' : 'ghost'}
                  onClick={() => setActiveTab('create')}
                >
                  Create Quiz
                </Button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {!quizMode ? (
          <>
            {activeTab === 'browse' ? (
              <div className="space-y-8 max-w-5xl mx-auto">
                {/* Templates Section */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold">Quiz Templates</h2>
                      <p className="text-muted-foreground">Start with a pre-made quiz</p>
                    </div>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {quizTemplates
                      .filter(template => selectedCategory === 'all' || template.category === selectedCategory)
                      .map(template => (
                        <div 
                          key={template.id}
                          className="group relative bg-card hover:bg-accent rounded-lg p-4 border transition-colors"
                        >
                          <span className="absolute top-2 right-2 text-xs text-muted-foreground bg-background px-2 py-1 rounded-full">
                            {template.category}
                          </span>
                          <h3 className="font-semibold mt-4">{template.name}</h3>
                          <p className="text-sm text-muted-foreground mt-2">{template.description}</p>
                          <p className="text-sm text-muted-foreground mt-1">{template.questions.length} questions</p>
                          <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                            <Button 
                              variant="secondary"
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent parent div click
                                if (questions.length > 0) {
                                  // Show confirmation dialog if there are existing questions
                                  if (window.confirm('This will replace your current questions. Are you sure?')) {
                                    loadTemplate(template.id);
                                  }
                                } else {
                                  loadTemplate(template.id);
                                }
                              }}
                            >
                              Use Template
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>

                {/* Saved Quizzes Section */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-semibold">Saved Quizzes</h2>
                      <p className="text-muted-foreground">Your quiz collection</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {savedQuizzes.map((quiz) => (
                      <div key={quiz.id} className="group relative bg-card hover:bg-accent rounded-lg p-4 border transition-colors">
                        <h3 className="font-semibold">{quiz.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {quiz.questions.length} questions
                        </p>
                        <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                          <Button variant="secondary" onClick={() => loadQuiz(quiz.id)}>
                            Load Quiz
                          </Button>
                          <Button variant="destructive" onClick={() => deleteQuiz(quiz.id)}>
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                    {savedQuizzes.length === 0 && (
                      <div className="col-span-full text-center p-12 border rounded-lg bg-card">
                        <p className="text-muted-foreground">No saved quizzes yet. Create a quiz or use a template to get started.</p>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Create New Quiz</h2>
                  {questions.length > 0 && (
                    <Button onClick={startQuiz}>Start Quiz</Button>
                  )}
                </div>

                {/* Question Creation Form */}
                <div className="space-y-4 bg-card border rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="question-type">Question Type</Label>
                      <Select
                        value={newQuestion.type}
                        onValueChange={(value: QuestionType) => setNewQuestion({ ...newQuestion, type: value })}
                      >
                        <SelectTrigger id="question-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                          <SelectItem value="constructed-response">Constructed Response</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="quiz-name">Quiz Name</Label>
                      <Input
                        id="quiz-name"
                        value={quizName}
                        onChange={(e) => setQuizName(e.target.value)}
                        placeholder="Enter quiz name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="question">Question</Label>
                    <Input
                      id="question"
                      value={newQuestion.question || ''}
                      onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                      placeholder="Enter your question"
                    />
                  </div>

                  {newQuestion.type === 'multiple-choice' && (
                    <div className="grid grid-cols-2 gap-4">
                      {newQuestion.options?.map((option, index) => (
                        <div key={index}>
                          <Label>Option {index + 1}</Label>
                          <Input
                            value={option}
                            onChange={(e) => {
                              const newOptions = [...(newQuestion.options || [])]
                              newOptions[index] = e.target.value
                              setNewQuestion({ ...newQuestion, options: newOptions })
                            }}
                            placeholder={`Option ${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <Label htmlFor="answer">Correct Answer</Label>
                    <Input
                      id="answer"
                      value={newQuestion.answer || ''}
                      onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
                      placeholder="Enter the correct answer"
                    />
                  </div>

                  <Button onClick={addQuestion}>Add Question</Button>
                </div>

                {/* Question List */}
                {questions.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="font-semibold">Questions ({questions.length})</h3>
                    <div className="bg-card border rounded-lg divide-y">
                      {questions.map((q, index) => (
                        <div key={q.id} className="p-4">
                          {editingQuestion?.id === q.id ? (
                            // Edit mode
                            <div className="space-y-4">
                              <div>
                                <Label>Question Type</Label>
                                <Select
                                  value={editingQuestion.type}
                                  onValueChange={(value: QuestionType) => 
                                    setEditingQuestion({ ...editingQuestion, type: value })
                                  }
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                                    <SelectItem value="constructed-response">Constructed Response</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div>
                                <Label>Question</Label>
                                <Input
                                  value={editingQuestion.question}
                                  onChange={(e) => 
                                    setEditingQuestion({ ...editingQuestion, question: e.target.value })
                                  }
                                  placeholder="Enter your question"
                                />
                              </div>

                              {editingQuestion.type === 'multiple-choice' && (
                                <div className="grid grid-cols-2 gap-4">
                                  {editingQuestion.options?.map((option, optionIndex) => (
                                    <div key={optionIndex}>
                                      <Label>Option {optionIndex + 1}</Label>
                                      <Input
                                        value={option}
                                        onChange={(e) => {
                                          const newOptions = [...(editingQuestion.options || [])]
                                          newOptions[optionIndex] = e.target.value
                                          setEditingQuestion({ 
                                            ...editingQuestion, 
                                            options: newOptions 
                                          })
                                        }}
                                        placeholder={`Option ${optionIndex + 1}`}
                                      />
                                    </div>
                                  ))}
                                </div>
                              )}

                              <div>
                                <Label>Acceptable Answers (one per line)</Label>
                                <textarea
                                  className="w-full min-h-[100px] p-2 border rounded-md"
                                  value={editingQuestion.constructedResponseConfig?.acceptableAnswers.join('\n') || ''}
                                  onChange={(e) => 
                                    setEditingQuestion({
                                      ...editingQuestion,
                                      constructedResponseConfig: {
                                        ...editingQuestion.constructedResponseConfig,
                                        acceptableAnswers: e.target.value.split('\n').filter(a => a.trim()),
                                        ignoreAccents: editingQuestion.constructedResponseConfig?.ignoreAccents || false
                                      }
                                    })
                                  }
                                  placeholder="Enter acceptable answers (one per line)"
                                />
                                <div className="mt-2">
                                  <Label className="flex items-center space-x-2">
                                    <input
                                      type="checkbox"
                                      checked={editingQuestion.constructedResponseConfig?.ignoreAccents || false}
                                      onChange={(e) =>
                                        setEditingQuestion({
                                          ...editingQuestion,
                                          constructedResponseConfig: {
                                            ...editingQuestion.constructedResponseConfig,
                                            acceptableAnswers: editingQuestion.constructedResponseConfig?.acceptableAnswers || 
                                                      (editingQuestion.answer ? [editingQuestion.answer] : []),
                                            ignoreAccents: e.target.checked
                                          }
                                        })
                                      }
                                    />
                                    <span>Ignore accent marks</span>
                                  </Label>
                                </div>
                              </div>

                              <div className="flex gap-2">
                                <Button 
                                  variant="default" 
                                  onClick={() => updateQuestion(editingQuestion)}
                                >
                                  Save Changes
                                </Button>
                                <Button 
                                  variant="outline" 
                                  onClick={() => setEditingQuestion(null)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            // View mode
                            <div className="flex items-center justify-between">
                              <div className="space-y-1">
                                <div>
                                  <span className="text-muted-foreground mr-2">Q{index + 1}.</span>
                                  <span>{q.question}</span>
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  <span className="mr-2">Type: {q.type}</span>
                                  <span className="mr-2">Answer: {q.answer}</span>
                                </div>
                                {q.type === 'multiple-choice' && (
                                  <div className="text-sm text-muted-foreground">
                                    Options: {q.options?.join(', ')}
                                  </div>
                                )}
                              </div>
                              <div className="flex gap-2">
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => setEditingQuestion(q)}
                                >
                                  Edit
                                </Button>
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => {
                                    const newQuestions = [...questions];
                                    newQuestions.splice(index, 1);
                                    setQuestions(newQuestions);
                                  }}
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end gap-2">
                      <Button variant="outline" onClick={saveQuiz} disabled={!quizName}>
                        Save Quiz
                      </Button>
                      <Button onClick={startQuiz}>Start Quiz</Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          // Quiz Mode (keep existing quiz mode UI)
          <div className="max-w-2xl mx-auto">
            <div 
              className="bg-card border rounded-lg p-6 space-y-6"
              onKeyPress={handleKeyPress}
              tabIndex={0}
            >
              <div>
                <h2 className="text-2xl font-semibold">Quiz Mode</h2>
                <p className="text-muted-foreground">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </p>
              </div>

              <div className="space-y-4">
                <div className="font-medium">{questions[currentQuestionIndex].question}</div>
                {questions[currentQuestionIndex].type === 'multiple-choice' ? (
                  <RadioGroup value={userAnswer} onValueChange={setUserAnswer}>
                    {questions[currentQuestionIndex].options?.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your answer"
                    autoFocus
                  />
                )}
              </div>

              {showResult && (
                <div className={`p-4 rounded-lg ${
                  checkAnswer(userAnswer, questions[currentQuestionIndex]) 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {checkAnswer(userAnswer, questions[currentQuestionIndex]) 
                    ? 'Correct!' 
                    : `Incorrect. Acceptable answers: ${
                        questions[currentQuestionIndex].constructedResponseConfig?.acceptableAnswers.join(' or ') || 
                        questions[currentQuestionIndex].answer
                      }`
                  }
                </div>
              )}

              <div className="flex justify-between">
                <Button onClick={handleAnswer} disabled={!userAnswer || showResult}>
                  Submit Answer
                </Button>
                <Button onClick={nextQuestion} disabled={!showResult}>
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'} 
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}