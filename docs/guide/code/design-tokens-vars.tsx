import DesignTokensBailu from '@fruits-chain/design-tokens-bailu'

const DesignTokensVars = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <div className="markdown" style={{ backgroundColor: '#fff' }}>
      <table>
        <thead>
          <tr>
            <th>变量名</th>
            <th>对应值</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(DesignTokensBailu).map(([key, value]) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                {/^#/.test(value) ? (
                  <td>
                    <span
                      // eslint-disable-next-line react-native/no-inline-styles
                      style={{
                        display: 'inline-block',
                        width: 10,
                        height: 10,
                        backgroundColor: value,
                        marginRight: 4,
                        borderWidth: 1,
                        borderColor: '#999',
                        borderStyle: 'solid',
                      }}
                    />
                    {value}
                  </td>
                ) : (
                  <td>{value}</td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DesignTokensVars
