import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { hot } from 'react-hot-loader'
import styles from './styles.module.scss'
import Duration from './Duration'
import PropTypes from 'prop-types'


class AudioPlayer extends Component {
  state = {
    volume: 1,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
  }

  playPause = () => {
      this.setState({ playing: !this.state.playing })
  }
  setVolume = e => {
      this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
      this.setState({ muted: !this.state.muted })
  }
  onPlay = () => {
      console.log('onPlay')
      this.setState({ playing: true })
  }
  onPause = () => {
      console.log('onPause')
      this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
      this.setState({ seeking: true })
  }
  onSeekChange = e => {
      this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
      this.setState({ seeking: false })
      this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
      if (!this.state.seeking) {
          this.setState(state)
      }
  }
  onDuration = (duration) => {
      console.log('onDuration', duration)
      this.setState({ duration })
  }
  ref = player => {
    this.player = player
  }
  render () {
    const { playing, volume, muted, played, loaded, duration } = this.state

    return (
      <div className={styles.app}>
          <div className='player-wrapper'>
            <ReactPlayer
              ref={this.ref}
              className={styles.Player}
              width='100%'
              height='100%'
              url={this.props.file}
              playing={playing}
              volume={volume}
              muted={muted}
              onReady={() => console.log('onReady')}
              onStart={() => console.log('onStart')}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onBuffer={() => console.log('onBuffer')}
              onSeek={e => console.log('onSeek', e)}
              onEnded={this.onEnded}
              onError={e => console.log('onError', e)}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
          </div>
          <div className={styles.controls} onClick={this.playPause} data-playstate={playing ? 'playing' : 'paused'}>
            <div className={styles.playPause}></div>
            <p className={styles.trackTitle}>{this.props.title}</p>
            <Duration seconds={duration}/>
          </div>
          <div className={styles.trackTimeline} data-playstate={playing ? 'playing' : 'paused'} data-playduration={played}>
            <input
              className={styles.seek}
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
            <div className={styles.trackLength} />
            <div className={styles.loaded} style={{width: 'calc(100% * ' + loaded + ')'}} />
            <div className={styles.played} style={{width: 'calc(100% * ' + played + ')'}} >
              <Duration seconds={duration * played}/>
            </div>
          </div>
      </div>
    )
  }
}

AudioPlayer.propTypes = {
  file: PropTypes.string,
  title: PropTypes.string,
  tracks: PropTypes.arrayOf(PropTypes.string),
}

export default hot(module)(AudioPlayer)