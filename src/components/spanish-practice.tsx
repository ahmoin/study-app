"use client"

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const verbs = {
  poder: {
    translation: 'to be able to',
    conjugations: {
      yo: 'puedo',
      tú: 'puedes',
      'él/ella/usted': 'puede',
      nosotros: 'podemos',
      vosotros: 'podéis',
      'ellos/ellas/ustedes': 'pueden'
    }
  },
  empezar: {
    translation: 'to begin',
    conjugations: {
      yo: 'empiezo',
      tú: 'empiezas',
      'él/ella/usted': 'empieza',
      nosotros: 'empezamos',
      vosotros: 'empezáis',
      'ellos/ellas/ustedes': 'empiezan'
    }
  },
  pedir: {
    translation: 'to ask for',
    conjugations: {
      yo: 'pido',
      tú: 'pides',
      'él/ella/usted': 'pide',
      nosotros: 'pedimos',
      vosotros: 'pedís',
      'ellos/ellas/ustedes': 'piden'
    }
  },
  hacer: {
    translation: 'to do/make',
    conjugations: {
      yo: 'hago',
      tú: 'haces',
      'él/ella/usted': 'hace',
      nosotros: 'hacemos',
      vosotros: 'hacéis',
      'ellos/ellas/ustedes': 'hacen'
    }
  },
  poner: {
    translation: 'to put',
    conjugations: {
      yo: 'pongo',
      tú: 'pones',
      'él/ella/usted': 'pone',
      nosotros: 'ponemos',
      vosotros: 'ponéis',
      'ellos/ellas/ustedes': 'ponen'
    }
  },
  traer: {
    translation: 'to bring',
    conjugations: {
      yo: 'traigo',
      tú: 'traes',
      'él/ella/usted': 'trae',
      nosotros: 'traemos',
      vosotros: 'traéis',
      'ellos/ellas/ustedes': 'traen'
    }
  },
  saber: {
    translation: 'to know (information)',
    conjugations: {
      yo: 'sé',
      tú: 'sabes',
      'él/ella/usted': 'sabe',
      nosotros: 'sabemos',
      vosotros: 'sabéis',
      'ellos/ellas/ustedes': 'saben'
    }
  },
  decir: {
    translation: 'to say',
    conjugations: {
      yo: 'digo',
      tú: 'dices',
      'él/ella/usted': 'dice',
      nosotros: 'decimos',
      vosotros: 'decís',
      'ellos/ellas/ustedes': 'dicen'
    }
  },
  dar: {
    translation: 'to give',
    conjugations: {
      yo: 'doy',
      tú: 'das',
      'él/ella/usted': 'da',
      nosotros: 'damos',
      vosotros: 'dais',
      'ellos/ellas/ustedes': 'dan'
    }
  },
  conocer: {
    translation: 'to know (be familiar with)',
    conjugations: {
      yo: 'conozco',
      tú: 'conoces',
      'él/ella/usted': 'conoce',
      nosotros: 'conocemos',
      vosotros: 'conocéis',
      'ellos/ellas/ustedes': 'conocen'
    }
  }
}

const statementTypes = ['hay que', 'se prohibe', 'tengo que']

type VerbKey = keyof typeof verbs
type SubjectKey = keyof (typeof verbs)[VerbKey]['conjugations']

type Mode = 'verbConjugation' | 'classroomStatements'

export function SpanishPractice() {
  const [mode, setMode] = useState<Mode>('verbConjugation')
  const [verbOrder, setVerbOrder] = useState<VerbKey[]>([])
  const [currentVerbIndex, setCurrentVerbIndex] = useState(0)
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0)
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [progress, setProgress] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [answerSubmitted, setAnswerSubmitted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [statements, setStatements] = useState<{ statement: string; type: string; isCorrect: boolean }[]>([])

  useEffect(() => {
    const shuffledVerbs = Object.keys(verbs) as VerbKey[]
    for (let i = shuffledVerbs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledVerbs[i], shuffledVerbs[j]] = [shuffledVerbs[j], shuffledVerbs[i]]
    }
    setVerbOrder(shuffledVerbs)
  }, [])

  const currentVerb = verbOrder[currentVerbIndex]
  const subjects = Object.keys(verbs[currentVerb]?.conjugations || {}) as SubjectKey[]
  const currentSubject = subjects[currentSubjectIndex]

  const handleSubmit = () => {
    if (mode === 'verbConjugation') {
      if (!currentVerb || !currentSubject) return;
      const correctAnswer = verbs[currentVerb].conjugations[currentSubject];
      const normalizedUserAnswer = userAnswer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const normalizedCorrectAnswer = correctAnswer.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
      if (normalizedUserAnswer === normalizedCorrectAnswer) {
        setFeedback(`¡Correcto! La respuesta es: ${correctAnswer}`);
        setIsCorrect(true);
        setCorrectAnswers(prev => prev + 1);
      } else {
        setFeedback(`Incorrecto. La respuesta correcta es: ${correctAnswer}`);
        setIsCorrect(false);
      }
      setProgress((currentSubjectIndex + 1) / subjects.length * 100);
    } else {
      setStatements(prev => [...prev, { statement: userAnswer, type: statementTypes[currentStatementIndex], isCorrect: false }]);
      setProgress((currentStatementIndex + 1) / statementTypes.length * 100);
    }
    setAnswerSubmitted(true);
  }

  const moveToNext = () => {
    if (mode === 'verbConjugation') {
      if (currentSubjectIndex === subjects.length - 1) {
        if (currentVerbIndex === verbOrder.length - 1) {
          setQuizCompleted(true)
          setFeedback('¡Has completado la práctica!')
          return
        }
        setCurrentVerbIndex(prev => prev + 1)
        setCurrentSubjectIndex(0)
        setProgress(0)
        setCorrectAnswers(0)
      } else {
        setCurrentSubjectIndex(prev => prev + 1)
      }
    } else {
      if (currentStatementIndex === statementTypes.length - 1) {
        setQuizCompleted(true)
        setFeedback('¡Has completado la práctica!')
        return
      }
      setCurrentStatementIndex(prev => prev + 1)
    }
    setUserAnswer('')
    setFeedback('')
    setIsCorrect(false)
    setAnswerSubmitted(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value)
    if (answerSubmitted) {
      setAnswerSubmitted(false)
      setFeedback('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (answerSubmitted) {
        moveToNext()
      } else {
        handleSubmit()
      }
    }
  }

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode)
    setCurrentVerbIndex(0)
    setCurrentSubjectIndex(0)
    setCurrentStatementIndex(0)
    setUserAnswer('')
    setFeedback('')
    setIsCorrect(false)
    setProgress(0)
    setCorrectAnswers(0)
    setAnswerSubmitted(false)
    setQuizCompleted(false)
    setStatements([])
  }

  const handleStatementCorrection = (index: number, isCorrect: boolean) => {
    setStatements(prev => prev.map((statement, i) => i === index ? { ...statement, isCorrect } : statement))
  }

  if (!currentVerb && mode === 'verbConjugation') return null

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Práctica de Español</CardTitle>
        <CardDescription>Elige un modo de práctica</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {!quizCompleted ? (
          <>
            <RadioGroup defaultValue={mode} onValueChange={(value) => handleModeChange(value as Mode)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="verbConjugation" id="verbConjugation" />
                <Label htmlFor="verbConjugation">Conjugación de Verbos</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="classroomStatements" id="classroomStatements" />
                <Label htmlFor="classroomStatements">Frases de Clase</Label>
              </div>
            </RadioGroup>
            <Progress value={progress} className="w-full" />
            {mode === 'verbConjugation' ? (
              <>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Verbo: <span className="font-bold">{currentVerb}</span> ({verbs[currentVerb].translation})</p>
                  <p className="text-sm font-medium">Sujeto: <span className="font-bold">{currentSubject}</span></p>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                <p className="text-sm font-medium">Tipo: <span className="font-bold">{statementTypes[currentStatementIndex]}</span></p>
              </div>
            )}
            <Input
              type="text"
              placeholder={mode === 'verbConjugation' ? "Escribe la conjugación" : "Escribe una frase usando el tipo dado"}
              value={userAnswer}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <Button 
              onClick={answerSubmitted ? moveToNext : handleSubmit} 
              className="w-full"
            >
              {answerSubmitted ? 'Siguiente' : 'Comprobar'}
            </Button>
            {feedback && mode === 'verbConjugation' && (
              <p className={`text-center font-medium ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                {feedback}
              </p>
            )}
          </>
        ) : mode === 'verbConjugation' ? (
          <p className="text-center font-medium text-green-600">¡Felicidades! Has completado la práctica de todos los verbos.</p>
        ) : (
          <div className="space-y-4">
            <p className="text-center font-medium text-green-600">¡Has completado todas las frases! Revisa tus respuestas:</p>
            {statements.map((statement, index) => (
              <div key={index} className="space-y-2">
                <p><strong>{statement.type}:</strong> {statement.statement}</p>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`correct-${index}`}
                    checked={statement.isCorrect}
                    onCheckedChange={(checked) => handleStatementCorrection(index, checked as boolean)}
                  />
                  <Label htmlFor={`correct-${index}`}>Correcto</Label>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
