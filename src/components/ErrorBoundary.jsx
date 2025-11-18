import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('UI Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
          <div className="max-w-lg w-full rounded-xl border border-white/10 bg-white/5 p-6">
            <h1 className="text-xl font-semibold mb-2">Un problème est survenu</h1>
            <p className="text-white/70 mb-4">La page a rencontré une erreur d’affichage. Essayez d’actualiser. Si le problème persiste, dites‑le moi.</p>
            <pre className="text-xs text-white/60 overflow-auto max-h-40 whitespace-pre-wrap">{String(this.state.error)}</pre>
            <button onClick={() => this.setState({ hasError: false, error: null })} className="mt-4 inline-flex items-center rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 transition">Réessayer</button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
