# Configuration EmailJS

## Installation

Installez le package EmailJS :

```bash
npm install @emailjs/browser
```

## Configuration EmailJS

### Option 1 : Utiliser Gmail (Recommandé mais nécessite une configuration OAuth)

**⚠️ IMPORTANT : Pour utiliser Gmail avec EmailJS, vous devez configurer OAuth2 dans Google Cloud Console**

#### Étapes pour configurer Gmail :

1. **Créez un projet dans Google Cloud Console**
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un nouveau projet ou sélectionnez un projet existant

2. **Activez l'API Gmail**
   - Dans le menu, allez dans "APIs & Services" > "Library"
   - Recherchez "Gmail API" et activez-la

3. **Configurez l'écran de consentement OAuth**
   - Allez dans "APIs & Services" > "OAuth consent screen"
   - Choisissez "External" (ou "Internal" si vous utilisez Google Workspace)
   - Remplissez les informations requises //475179518618-kha7qaqrui3nuc41slgcvq0hs9o4maav.apps.googleusercontent.com
   - Ajoutez les scopes suivants :
     - `https://www.googleapis.com/auth/gmail.send`
     - `https://www.googleapis.com/auth/gmail.compose`

4. **Créez des identifiants OAuth 2.0**
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "OAuth client ID"
   - Choisissez "Web application"
   - Ajoutez les URI de redirection autorisés :
     - `https://api.emailjs.com/api/v1.0/user/oauth/google/callback`
     - `http://localhost:5173` (pour le développement local)

5. **Dans EmailJS**
   - Allez dans votre dashboard EmailJS
   - Créez un nouveau service email
   - Sélectionnez "Gmail"
   - Connectez votre compte Gmail en autorisant les permissions
   - Utilisez les identifiants OAuth créés dans Google Cloud Console

### Option 2 : Utiliser un service email alternatif (Plus simple)

Si la configuration Gmail est trop complexe, utilisez un autre service :

#### Avec Outlook/Hotmail :
1. Créez un service email dans EmailJS
2. Sélectionnez "Outlook"
3. Connectez votre compte Outlook
4. Suivez les instructions à l'écran

#### Avec un service SMTP personnalisé :
1. Créez un service email dans EmailJS
2. Sélectionnez "Custom SMTP Server"
3. Configurez avec les paramètres SMTP de votre fournisseur email

### Création du Template d'Email

1. Dans EmailJS, allez dans "Email Templates"
2. Créez un nouveau template avec les variables suivantes :
   - `{{from_name}}` - Nom de l'expéditeur
   - `{{from_email}}` - Email de l'expéditeur
   - `{{message}}` - Message
   - `{{to_email}}` - Votre email (tolotranomenjanahary@gmail.com)

3. Exemple de template :
```
Subject: Nouveau message depuis le portfolio - {{from_name}}

Bonjour,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
```

### Configuration des Variables d'Environnement

1. Récupérez vos identifiants depuis EmailJS :
   - Service ID (dans "Email Services")
   - Template ID (dans "Email Templates")
   - Public Key (dans "Account" > "General")

2. Créez un fichier `.env` à la racine du projet avec :

```
VITE_EMAILJS_SERVICE_ID=votre_service_id
VITE_EMAILJS_TEMPLATE_ID=votre_template_id
VITE_EMAILJS_PUBLIC_KEY=votre_public_key
```

3. Redémarrez le serveur de développement après avoir créé le fichier `.env`

## Résolution des Problèmes

### Erreur "Request had insufficient authentication scopes"

Cette erreur signifie que les permissions OAuth ne sont pas correctement configurées :

1. Vérifiez que vous avez ajouté les scopes nécessaires dans Google Cloud Console :
   - `https://www.googleapis.com/auth/gmail.send`
   - `https://www.googleapis.com/auth/gmail.compose`

2. Révoquez et reconnectez votre compte Gmail dans EmailJS

3. Assurez-vous que l'écran de consentement OAuth est publié (si nécessaire)

### Alternative : Utiliser un autre service email

Si vous continuez à avoir des problèmes avec Gmail, utilisez Outlook ou un service SMTP personnalisé qui est souvent plus simple à configurer.

## Utilisation

Une fois configuré, le formulaire de contact enverra automatiquement les emails via EmailJS. Les messages de succès et d'erreur s'afficheront automatiquement après l'envoi.
