import 'ldrs/waveform'
console.log('Loading component rendered');
export const Loading = () => {
  return (
    <div>
        <l-waveform
        size="60"
        stroke="3.5"
        speed="1"
        color="orange"
        onerror={(e) => console.error('Error loading waveform:', e)} 
      ></l-waveform>
    </div>
  )
}

