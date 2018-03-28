Search.setIndex({docnames:["dicom2nifti","dicom2nifti.common","dicom2nifti.compressed_dicom","dicom2nifti.convert_dicom","dicom2nifti.convert_dir","dicom2nifti.convert_ge","dicom2nifti.convert_generic","dicom2nifti.convert_hitachi","dicom2nifti.convert_philips","dicom2nifti.convert_siemens","dicom2nifti.exceptions","dicom2nifti.image_reorientation","dicom2nifti.image_volume","dicom2nifti.patch_pydicom_encodings","dicom2nifti.resample","dicom2nifti.settings","index","readme"],envversion:51,filenames:["dicom2nifti.rst","dicom2nifti.common.rst","dicom2nifti.compressed_dicom.rst","dicom2nifti.convert_dicom.rst","dicom2nifti.convert_dir.rst","dicom2nifti.convert_ge.rst","dicom2nifti.convert_generic.rst","dicom2nifti.convert_hitachi.rst","dicom2nifti.convert_philips.rst","dicom2nifti.convert_siemens.rst","dicom2nifti.exceptions.rst","dicom2nifti.image_reorientation.rst","dicom2nifti.image_volume.rst","dicom2nifti.patch_pydicom_encodings.rst","dicom2nifti.resample.rst","dicom2nifti.settings.rst","index.rst","readme.rst"],objects:{"":{dicom2nifti:[0,0,0,"-"]},"dicom2nifti.common":{apply_scaling:[1,1,1,""],create_affine:[1,1,1,""],do_scaling:[1,1,1,""],get_fd_array_value:[1,1,1,""],get_fd_value:[1,1,1,""],get_fl_value:[1,1,1,""],get_is_value:[1,1,1,""],get_numpy_type:[1,1,1,""],get_ss_value:[1,1,1,""],get_volume_pixeldata:[1,1,1,""],read_dicom_directory:[1,1,1,""],set_fd_value:[1,1,1,""],set_ss_value:[1,1,1,""],set_tr_te:[1,1,1,""],sort_dicoms:[1,1,1,""],validate_orientation:[1,1,1,""],validate_orthogonal:[1,1,1,""],validate_slicecount:[1,1,1,""],validate_sliceincrement:[1,1,1,""],write_bval_file:[1,1,1,""],write_bvec_file:[1,1,1,""]},"dicom2nifti.compressed_dicom":{compress_directory:[2,1,1,""],is_dicom_file:[2,1,1,""],read_file:[2,1,1,""]},"dicom2nifti.convert_dicom":{Vendor:[3,2,1,""],are_imaging_dicoms:[3,1,1,""],dicom_array_to_nifti:[3,1,1,""],dicom_series_to_nifti:[3,1,1,""]},"dicom2nifti.convert_dicom.Vendor":{GE:[3,3,1,""],GENERIC:[3,3,1,""],HITACHI:[3,3,1,""],PHILIPS:[3,3,1,""],SIEMENS:[3,3,1,""]},"dicom2nifti.convert_dir":{convert_directory:[4,1,1,""]},"dicom2nifti.convert_ge":{dicom_to_nifti:[5,1,1,""],is_ge:[5,1,1,""]},"dicom2nifti.convert_generic":{dicom_to_nifti:[6,1,1,""]},"dicom2nifti.convert_hitachi":{dicom_to_nifti:[7,1,1,""],is_hitachi:[7,1,1,""]},"dicom2nifti.convert_philips":{dicom_to_nifti:[8,1,1,""],is_multiframe_dicom:[8,1,1,""],is_philips:[8,1,1,""]},"dicom2nifti.convert_siemens":{MosaicType:[9,2,1,""],dicom_to_nifti:[9,1,1,""],is_siemens:[9,1,1,""]},"dicom2nifti.convert_siemens.MosaicType":{ASCENDING:[9,3,1,""],DESCENDING:[9,3,1,""]},"dicom2nifti.exceptions":{ConversionError:[10,4,1,""],ConversionValidationError:[10,4,1,""]},"dicom2nifti.image_reorientation":{reorient_image:[11,1,1,""]},"dicom2nifti.image_volume":{ImageVolume:[12,2,1,""],Slice:[12,2,1,""],SliceOrientation:[12,2,1,""],SliceType:[12,2,1,""]},"dicom2nifti.image_volume.ImageVolume":{get_slice:[12,5,1,""]},"dicom2nifti.image_volume.Slice":{original_data:[12,3,1,""],slice_orientation:[12,3,1,""]},"dicom2nifti.image_volume.SliceOrientation":{normal_component:[12,3,1,""],x_component:[12,3,1,""],x_inverted:[12,3,1,""],y_component:[12,3,1,""],y_inverted:[12,3,1,""]},"dicom2nifti.image_volume.SliceType":{AXIAL:[12,3,1,""],CORONAL:[12,3,1,""],SAGITTAL:[12,3,1,""]},"dicom2nifti.patch_pydicom_encodings":{apply:[13,1,1,""]},"dicom2nifti.resample":{resample_image:[14,1,1,""]},"dicom2nifti.settings":{disable_pydicom_read_force:[15,1,1,""],disable_resampling:[15,1,1,""],disable_validate_multiframe_implicit:[15,1,1,""],disable_validate_orientation:[15,1,1,""],disable_validate_orthogonal:[15,1,1,""],disable_validate_slicecount:[15,1,1,""],disable_validate_sliceincrement:[15,1,1,""],enable_pydicom_read_force:[15,1,1,""],enable_resampling:[15,1,1,""],enable_validate_multiframe_implicit:[15,1,1,""],enable_validate_orientation:[15,1,1,""],enable_validate_orthogonal:[15,1,1,""],enable_validate_slicecount:[15,1,1,""],enable_validate_sliceincrement:[15,1,1,""],set_gdcmconv_path:[15,1,1,""],set_resample_padding:[15,1,1,""],set_resample_spline_interpolation_order:[15,1,1,""]},dicom2nifti:{common:[1,0,0,"-"],compressed_dicom:[2,0,0,"-"],convert_dicom:[3,0,0,"-"],convert_dir:[4,0,0,"-"],convert_ge:[5,0,0,"-"],convert_generic:[6,0,0,"-"],convert_hitachi:[7,0,0,"-"],convert_philips:[8,0,0,"-"],convert_siemens:[9,0,0,"-"],exceptions:[10,0,0,"-"],image_reorientation:[11,0,0,"-"],image_volume:[12,0,0,"-"],patch_pydicom_encodings:[13,0,0,"-"],resample:[14,0,0,"-"],settings:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:exception","5":"py:method"},terms:{"4th":12,"byte":2,"case":[12,15],"class":[3,9,12],"default":[3,15,17],"enum":[3,9,12],"final":[],"function":[1,2,3,4,5,6,7,8,9],"import":[3,13,17],"long":17,"return":[1,2,3,11,12],"true":[2,3,4,17],"try":[3,15,17],For:17,LAS:[3,4,11],NOT:17,The:[11,15],There:17,USE:15,Use:[5,7,8,9],Using:16,WITH:15,abri:[0,1,3,4,5,6,7,8,9,10,11,12,14],accord:4,account:12,affin:[1,3,12,15,17],affine_transform:17,again:15,alik:[1,15],all:[1,4,12,15,17],allow:[15,17],alreadi:8,also:[1,17],anatom:[3,6,17],anonymis:17,anterior:11,anyon:17,api:17,appli:13,apply_sc:1,are_imaging_dicom:3,arn:17,arrai:1,ascend:9,aug:11,author:[0,1,3,4,5,6,7,8,9,10,11,12,14,17],avoid:17,axial:[11,12],base:[1,3,9,10,12],bash:[],befor:1,between:[1,10],big:1,bitsalloc:1,block:2,bool:1,brows:3,bry:17,bval:[1,3],bval_fil:[1,3],bvec:[1,3],bvec_fil:[1,3],calcul:1,can:[1,2,3,8,12,17],captur:17,caus:1,caution:15,certain:12,chang:11,check:[1,2,3,8,15],classic:17,clear:3,close:1,code:[1,3,4,17],com:[3,17],combin:[],command:16,common:[0,16],compress:[2,4],compress_dicom:[],compress_directori:2,configur:17,conform:15,consid:15,consist:15,contact:17,contain:[2,3,8,12],content:16,contrib:3,convers:[5,7,8,9],conversionerror:10,conversionvalidationerror:10,convert:[2,3,4,6,15,17],convert_dicom:[0,16],convert_dir:[0,16],convert_directori:[4,17],convert_g:[0,16],convert_gener:[0,16],convert_philip:[0,16],convert_siemen:[0,16],coron:[11,12],correct:[1,5,7,8,9,12],could:15,count:[1,15],cover:1,creat:[1,11,12],create_affin:1,custom:10,data:[1,3,9,11,12,15,16],dataset:[5,7,8,9,12,17],decompress:[],decompress_dicom:[],decompress_directori:[],defer_s:2,descend:9,detect:[5,7,8,9],determin:[5,7,8,9],develop:17,dicm:2,dicom:[1,2,3,4,5,6,7,8,9,15,17],dicom_array_to_nifti:3,dicom_directori:[1,2,4,17],dicom_fil:2,dicom_head:[1,7,8],dicom_input:[3,5,6,7,8,9],dicom_list:3,dicom_orient:1,dicom_series_to_nifti:[3,17],dicom_to_nifti:[5,6,7,8,9],dictionari:3,differ:1,difficult:17,dimens:12,direct:12,directori:[1,2,3,4,6,7,8,9,17],disabl:[4,15,17],disable_pydicom_read_forc:15,disable_resampl:15,disable_validate_multiframe_implicit:15,disable_validate_orient:15,disable_validate_orthogon:[15,17],disable_validate_slicecount:15,disable_validate_sliceincr:15,distanc:1,distinguish:10,dki:17,do_scal:1,document:17,dti:[3,17],dtype:1,dure:15,echo:1,echo_tim:1,enabl:[4,15],enable_pydicom_read_forc:15,enable_resampl:[15,17],enable_validate_multiframe_implicit:15,enable_validate_orient:15,enable_validate_orthogon:15,enable_validate_slicecount:15,enable_validate_sliceincr:15,encod:13,encount:17,endian:17,enhanc:17,enough:1,equal:1,error:10,etc:1,exampl:[3,5,6,7,8],except:[0,16],execut:15,explicitli:17,extend:13,factor:1,fals:[1,2,12],field:17,file:[1,2,3,4,5,6,7,8,9,13,15,17],filenam:2,filepath:[1,5,6,9,11,15],find:12,first:[2,8],fix:13,fmri:[3,17],folder:[2,4],forc:[2,15],form:[11,17],format:1,found:[3,15],frequent:13,fri:12,from:[1,11,16],fuction:[5,7,8],further:[],gantri:[14,15,16],gdcmconv:15,gener:[1,3],get:[1,12],get_fd_array_valu:1,get_fd_valu:1,get_fl_valu:1,get_is_valu:1,get_numpy_typ:1,get_slic:12,get_ss_valu:1,get_volume_pixeldata:1,getter:1,git:[],github:17,given:1,googl:3,gzip:4,handi:1,have:[1,15],header:[1,2,3],help:17,hitachi:[3,7,16],hous:4,html:[1,3],http:[1,3,17],icometrix:17,ignor:15,imag:[1,2,5,7,8,9,11,12,14,17],image_reorient:[0,16],image_volum:[0,16],imagevolum:12,implicit:[1,15,17],increas:11,increment:15,index:16,inferior:11,info:1,inform:17,input:[1,5,7,8,9],input_directori:17,input_fil:[],input_imag:11,input_nifti:[12,14],inspir:3,instal:16,int32:1,intercept:1,interpol:[15,17],is_compress:[],is_dicom_fil:2,is_g:5,is_hitachi:7,is_multiframe_dicom:8,is_philip:8,is_siemen:9,issu:13,item:1,jpeg:2,jun:12,just:4,kei:3,know:10,latest:17,leav:17,left:11,less:[13,15],level:12,librari:17,like:[12,17],line:16,list:[1,3,5,6],local:[1,15],main:[5,7,8,9],make:[1,17],map:13,matrix:[1,12,15,17],meaningful:1,messag:10,method:1,mimick:3,minim:15,modul:16,more:17,mosaic:[1,9],mosaictyp:9,most:17,much:17,multifram:15,ndimag:17,need:15,net:3,next:2,nibabel:[1,3,11],nifti:[1,3,4,5,6,7,8,9,12,17],nifti_imag:1,nii_fil:3,nipi:[1,3],non:[15,17],none:[2,12],normal_compon:12,note:8,number:[1,12],numpi:1,object:[1,3,5,9,12],obsolet:[],onc:[],one:[4,8],ones:2,onli:[1,3,8,17],option:17,order:[1,4,11,15,17],org:1,organ:17,orient:[1,3,4,11,12,15],origin:12,original_data:12,original_dicom_directori:[3,17],orthogon:[15,17],orthonorm:1,other:17,otherwis:2,output:[5,6,7,8,9,11],output_directori:17,output_fil:[3,5,6,7,8,9,17],output_fold:[4,17],output_imag:11,packag:16,pad:[15,17],page:16,parallel:15,param:12,paramet:[1,2,3,4,5,6,7,8,9,11,15],path:[3,7,8,15],patient:1,philip:[3,8,15,16],piec:1,pip:17,pixel:1,pixeldata:1,pixelrepresent:1,place:14,plane:11,pleas:17,possibl:[3,9,17],possit:1,posterior:11,preambl:2,privat:17,private_scale_intercept:1,private_scale_slop:1,provid:[8,12,17],pydicom:[3,13,15],pydicom_seri:3,pydicomseri:1,pypi:[],python:16,random:4,read:[1,3,6,13,15],read_dicom_directori:1,read_fil:2,readthedoc:17,reflect:15,releas:[],reorient:4,reorient_imag:11,reorient_nifti:[3,17],repetit:1,repetition_tim:1,repositori:17,repres:[11,12],requir:[5,7,8,9],resampl:[15,17],resample_imag:14,resample_ord:17,resample_pad:17,rescal:1,rescale_intercept:1,rescale_slop:1,rescaleoffset:1,rescaleslop:1,result:17,retreiv:1,right:11,sagit:[],sagitt:[11,12],same:[1,15],scale:1,scan:[3,6,7,8,9,15],scanner:17,scipi:17,script:10,search:16,see:[3,5,6,7,8],sequenc:3,seri:[1,3,4,5,6,7,8,9,17],set:[0,1,16,17],set_fd_valu:1,set_gdcmconv_path:15,set_resample_pad:[15,17],set_resample_spline_interpolation_ord:[15,17],set_ss_valu:1,set_tr_t:1,setter:1,share:17,should:[1,2,3,17],siemen:[3,8,9,16],sign:1,similar:15,singl:[3,6,12],six:[1,2],skew:1,skip:1,slice:[1,8,12,15],slice_numb:12,slice_orient:12,slice_typ:12,sliceorient:12,slicetyp:12,some:17,sometim:15,sore:1,sort:[1,8],sort_dicom:1,sorted_dicom:1,sorted_slic:1,sourc:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],sourceforg:3,space:11,specif:[3,17],spline:[15,17],spm:3,spm_dicom:3,standard:17,step:[],stop:1,stop_before_pixel:[1,2],store:3,string:1,string_typ:[1,2],submodul:16,superior:11,support:[3,16],syntax:[15,17],tag:1,take:12,test:[3,5,6,7,8],than:15,thei:17,them:[1,4],thi:[1,2,3,4,5,6,7,8,9,12,13,15,17],thu:[11,15],tilt:[14,15,16],time:1,time_point:12,transfer:[15,17],transfersyntax:1,two:1,tye:12,type:[3,5,7,8,9,10,12],uint16:1,uint8:12,uncompress:[2,3],under:3,unit:[3,5,6,7,8],unsign:1,unsupport:16,updat:[3,16],upgrad:17,usag:16,use:[1,17],used:[2,3,12,13,15],usual:15,util:2,valid:[1,10,15,17],validate_orient:1,validate_orthogon:1,validate_slicecount:1,validate_sliceincr:1,valu:[1,12,17],vector:1,vendor:[3,17],veri:1,volum:[1,12,15],vterzopoulo:11,want:1,when:13,where:[15,17],whether:15,which:3,willing:17,window:12,without:[1,15],work:1,write:[1,3,4],write_bval_fil:1,write_bvec_fil:1,x_compon:12,x_invert:12,y_compon:12,y_invert:12,you:[3,8,12,17],your:15},titles:["dicom2nifti package","dicom2nifti.common module","dicom2nifti.compressed_dicom module","dicom2nifti.convert_dicom module","dicom2nifti.convert_dir module","dicom2nifti.convert_ge module","dicom2nifti.convert_generic module","dicom2nifti.convert_hitachi module","dicom2nifti.convert_philips module","dicom2nifti.convert_siemens module","dicom2nifti.exceptions module","dicom2nifti.image_reorientation module","dicom2nifti.image_volume module","dicom2nifti.patch_pydicom_encodings module","dicom2nifti.resample module","dicom2nifti.settings module","Welcome to dicom2nifti&#8217;s documentation!","dicom2nifti"],titleterms:{Using:17,command:17,common:1,compressed_dicom:2,content:0,convert_dicom:3,convert_dir:4,convert_g:5,convert_gener:6,convert_hitachi:7,convert_philip:8,convert_siemen:9,data:17,dicom2nifti:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],document:16,except:10,from:17,gantri:17,hitachi:17,image_reorient:11,image_volum:12,indic:16,instal:17,line:17,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],packag:0,patch_pydicom_encod:13,philip:17,pydicom:[],python:17,resampl:14,set:15,siemen:17,submodul:0,support:17,tabl:16,tilt:17,unsupport:17,updat:17,usag:17,welcom:16}})