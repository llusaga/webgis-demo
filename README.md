# Pàgina de proves

Aquesta és una pàgina multiproposit creada per la assignatura WebGIS...

## Inici

Per a utilitzar aquest repositori es pot:
* Descarregar els fitxers...
* Clonar el repositori: `git clone https://github.com/benizar/webgis-demo.git`
* Fer un fork del repositori

## Errors i suggeriments


## Creadors


## Copyright and License

La llicencia es pot trobar en [MIT](https://github.com/benizar/webgis-demo/blob/gh-pages/LICENSE)...

## Exemple de mermaid
```mermaid
---
config:
  layout: elk
---
flowchart TD
    A[Dades Geogràfiques] -->|Importar| B[QGIS]
    B -->|Processament| C[Edició de Capes]
    C -->|Estil i Simbologia| D[Disseny del Mapa]
    D -->|Exportar| E[Format Web]
    E -->|GeoJSON/TopoJSON| F[Servidor Web]
    F -->|HTTP Request| G[Navegador Web]
    G -->|Biblioteca JS| H[Visualització Interactiva]
    I[Leaflet/MapBox/Openlayers] -.->|Rendering| H
    J[CSS/HTML] -.->|Estil| H
    H -->|Resultat Final| K[Mapa Web Interactiu]
    
    classDef data fill:#f0fdf4,stroke:#4ade80,color:#1e1b4b
    classDef process fill:#eef2ff,stroke:#818cf8,color:#1e1b4b
    classDef output fill:#fff7ed,stroke:#fb923c,color:#1e1b4b
    classDef tools fill:#f0f9ff,stroke:#38bdf8,color:#1e1b4b
    classDef final fill:#fdf4ff,stroke:#e879f9,color:#1e1b4b
    
    class A data
    class B,C,D,E process
    class F,G,H output
    class I,J tools
    class K final
```
