"use strict";(self.webpackChunkmd_note=self.webpackChunkmd_note||[]).push([[9265],{3732:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>g,frontMatter:()=>t,metadata:()=>s,toc:()=>i});var a=n(5893),l=n(1151);const t={},o=void 0,s={id:"Vue/Drag_and_Drop_upload",title:"Drag_and_Drop_upload",description:"",source:"@site/docs/Vue/Drag_and_Drop_upload.md",sourceDirName:"Vue",slug:"/Vue/Drag_and_Drop_upload",permalink:"/my-notes/docs/Vue/Drag_and_Drop_upload",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Vue/Drag_and_Drop_upload.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"TypeScript_basic",permalink:"/my-notes/docs/TypeScript/TypeScript_basic"},next:{title:"Use mitt as eventBus in vue3 with Inject/Provide",permalink:"/my-notes/docs/Vue/Vue_EventBus"}},d={},i=[];function c(e){const r={code:"code",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-html",children:'<template>\r\n  <div class="modal">\r\n    \x3c!-- this modal for add images to gallery --\x3e\r\n    <h3>{{gallery.name}}</h3>\r\n    <div class="drop-zone" @drop="handleDrop" @dragover.prevent @dragenter.prevent @dragleave.prevent>\r\n      <h2>Please drop you images here</h2>\r\n    </div>\r\n\r\n    <p>images to upload</p>\r\n    <div class="image-upload">\r\n      <div v-for="image in images" :key="image.name">\r\n        <img :src="image.url" :alt="image.name">\r\n      </div>\r\n    </div>\r\n    <div class="footer">\r\n      <button type="submit" class="submit-btn" @click="upload">Upload</button>\r\n      <button class="clean-btn" type="button" @click="clean">clean images</button>\r\n    </div>\r\n    <h5>uploaded images</h5>\r\n    <div class="uploaded-images">\r\n      <div v-for="galleryImage in galleryImages" :key="galleryImage.id">\r\n        <div :class="[isSelectedUploadedGalleryImage(galleryImage)? \'selected\' : \'\']" @click="handleSelectUploadedGalleryImage(galleryImage)">\r\n          <img :src="baseUrls + galleryImage.image.path" :alt="galleryImage.image.name">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class="footer">\r\n      <button class="close-btn" type="button" @click="cancel">Close</button>\r\n      <button class="delete-btn" @click="deleteSelectedUploadedGalleryImages">Delete</button>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport { ref, onMounted } from \'vue\';\r\nimport { axiosCall } from \'@/hooks/axios\';\r\nexport default {\r\n  name: \'AddImageModal\',\r\n  props: {\r\n    gallery: { required: true },\r\n  },\r\n  setup(props, context) {\r\n    const images = ref([]);\r\n    const baseUrls = ref(process.env.VUE_APP_IMAGE_BASE_PATH);\r\n\r\n    // selected uploaded gallery images\r\n    const selectedUploadedGleryImages = ref([]);\r\n\r\n    // select uploaded gallery image\r\n    function handleSelectUploadedGalleryImage(image) {\r\n      if (selectedUploadedGleryImages.value.includes(image)) {\r\n        selectedUploadedGleryImages.value = selectedUploadedGleryImages.value.filter((item) => item !== image);\r\n      } else {\r\n        selectedUploadedGleryImages.value.push(image);\r\n      }\r\n    }\r\n\r\n    // if gallery image is selected return true\r\n    function isSelectedUploadedGalleryImage(image) {\r\n      return selectedUploadedGleryImages.value.includes(image);\r\n    }\r\n\r\n    // get gallery images from props gallery\r\n    const galleryImages = ref(props.gallery.gallery_images);\r\n\r\n    function cancel() {\r\n      context.emit(\'close\');\r\n    };\r\n\r\n    // get gallery by id and asign gallery-images to galleryImages\r\n    function getGallery() {\r\n      axiosCall.get(`/gallery/${props.galleryId}`)\r\n        .then((response) => {\r\n          // galleryImages.value = response.data.images;\r\n          console.log(response.data);\r\n        })\r\n        .catch((error) => {\r\n          console.log(error);\r\n        });\r\n    };\r\n\r\n    // delete selected uploaded gallery images from backend\r\n    function deleteSelectedUploadedGalleryImages() {\r\n      // if no images selected\r\n      if (selectedUploadedGleryImages.value.length === 0) {\r\n        alert(\'No images selected.\');\r\n        return;\r\n      }\r\n\r\n      axiosCall.delete(`/gallery/${props.gallery.id}/deleteMultipleImages`, { data: { galleryImages: selectedUploadedGleryImages.value } })\r\n        .then((response) => {\r\n          console.log(response);\r\n          galleryImages.value = response.data.data.gallery_images;\r\n          selectedUploadedGleryImages.value = [];\r\n          context.emit(\'uploaded\');\r\n        })\r\n        .catch((error) => {\r\n          console.log(error);\r\n        });\r\n    }\r\n\r\n    // upload images to gallery\r\n    const upload = async () => {\r\n      try {\r\n        console.log(images.value);\r\n        if (images.value.length === 0) {\r\n          alert(\'No images to upload.\');\r\n        }\r\n\r\n        // upload multiple base64 images\r\n        axiosCall\r\n          .post(\r\n            `/gallery/${props.gallery.id}/uploadMultipleImages`,\r\n            { images: images.value, gallery_id: props.gallery.id},\r\n          )\r\n          .then((response) => {\r\n            console.log(response);\r\n            images.value = [];\r\n            galleryImages.value = response.data.data.gallery_images;\r\n            context.emit(\'uploaded\');\r\n          })\r\n          .catch((error) => {\r\n            console.log(error);\r\n          });\r\n        \r\n      } catch (error) {\r\n        console.error(error);\r\n        // Show error message to the user\r\n        alert(error.message);\r\n      }\r\n    };\r\n\r\n    const clean = () => {\r\n      images.value = [];\r\n    };\r\n\r\n    const handleDrop = async (event) => {\r\n      try {\r\n        event.preventDefault();\r\n        event.stopPropagation();\r\n\r\n        const files = event.dataTransfer.files;\r\n        if (!files) {\r\n          throw new Error(\'No files were dropped.\');\r\n        }\r\n\r\n\r\n        for (let i = 0; i < files.length; i++) {\r\n          // check if file is an image\r\n          if (!files[i].type.match(\'image.*\')) {\r\n            throw new Error(`File ${files[i].name} is not an image.`);\r\n          }\r\n          // you can use the file reader to read the file as a data url\r\n          const fileReader = new FileReader();\r\n          fileReader.onload = (e) => {\r\n            images.value.push({\r\n              name: files[i].name,\r\n              url: e.target.result\r\n            });\r\n          };\r\n          fileReader.onerror = (e) => {\r\n            console.log(e);\r\n            throw new Error(`An error occurred while reading file ${files[i].name}.`);\r\n          };\r\n          fileReader.readAsDataURL(files[i]);\r\n        }\r\n      } catch (error) {\r\n        console.error(error);\r\n        // Show error message to the user\r\n        alert(error.message);\r\n      }\r\n    }\r\n\r\n    return {\r\n      cancel,\r\n      getGallery,\r\n      images,\r\n      handleDrop,\r\n      clean,\r\n      upload,\r\n      galleryImages,\r\n      baseUrls,\r\n      selectedUploadedGleryImages,\r\n      handleSelectUploadedGalleryImage,\r\n      isSelectedUploadedGalleryImage,\r\n      deleteSelectedUploadedGalleryImages\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n\n'})})}function g(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>o});var a=n(7294);const l={},t=a.createContext(l);function o(e){const r=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(t.Provider,{value:r},e.children)}}}]);